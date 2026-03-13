generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}



model Group {
  id            Int           @id @default(autoincrement())
  groupName     String        @unique
  status        Int           @default(1)
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
  products      Product[]
  categories    Category[]    @relation("CategoryToGroup")
  subcategories SubCategory[] @relation("GroupToSubCategory")

  @@index([status])
}

model Category {
  id            Int           @id @default(autoincrement())
  categoryName  String        @unique
  categoryImage String
  status        Int           @default(1)
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
  products      Product[]
  subcategories SubCategory[]
  groups        Group[]       @relation("CategoryToGroup")

  @@index([status])
}

model SubCategory {
  id               Int       @id @default(autoincrement())
  subCategoryName  String    @unique
  subCategoryImage String
  categoryId       Int
  status           Int       @default(1)
  createdAt        DateTime  @default(now())
  updatedAt        DateTime  @updatedAt
  products         Product[]
  category         Category  @relation(fields: [categoryId], references: [id])
  groups           Group[]   @relation("GroupToSubCategory")

  @@index([categoryId])
  @@index([status])
}

model Product {
  id              Int           @id @default(autoincrement())
  productCode     String        @unique
  productName     String
  groupId         Int
  categoryId      Int
  subCategoryId   Int
  status          Int           @default(1)
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  productStatusId Int
  productImage    String?
  offers          Offer[]
  productPrices   ProductPrice[]
  category        Category      @relation(fields: [categoryId], references: [id])
  group           Group         @relation(fields: [groupId], references: [id])
  productStatus   ProductStatus @relation(fields: [productStatusId], references: [id])
  subCategory     SubCategory   @relation(fields: [subCategoryId], references: [id])

  @@index([productStatusId])
  @@index([groupId])
  @@index([categoryId])
  @@index([subCategoryId])
  @@index([status])
}
model ProductPrice {
  id                  Int      @id @default(autoincrement())
  productId           Int
  offerId             Int?
  currentPrice        Int
  previousPrice       Int?
  offerPrice          Int?
  offerPercentage     Int?
  discountPrice       Int?
  discountPercentage  Int?
  status              Int      @default(1)
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  inventories         Inventory[]
  orderItems          OrderItem[]

  product             Product   @relation(fields: [productId], references: [id])
  offer               Offer?    @relation(fields: [offerId], references: [id])

  @@index([productId])
  @@index([offerId])
  @@index([status])
}
model Inventory {
  id                   Int      @id @default(autoincrement())
  inventoryTrackingId  String   @unique
  productPriceId       Int
  inventoryPrice       Int
  inventoryQty         Int
  userId               Int?
  inventoryType        InventoryType @default(PENDING)
  status               Int      @default(1)
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt

  productPrice         ProductPrice @relation(fields: [productPriceId], references: [id])

  stocks               Stock[]

  @@index([productPriceId])
  @@index([status])
}
enum InventoryType {
  COMPLETE
  PENDING
  UPDATED
}
model Stock {
  id               Int      @id @default(autoincrement())
  stockTrackingId  String   @unique
  inventoryId      Int
  userId           Int?
  status           Int      @default(1)
  stockType        StockType @default(IN)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  inventory        Inventory @relation(fields: [inventoryId], references: [id])
  stockItems       StockItem[]

  @@index([inventoryId])
  @@index([createdAt])
}
enum StockType {
  IN
  OUT
  ADJUSTMENT
}
model StockItem {
  id          Int      @id @default(autoincrement())
  stockId     Int
  stockAmount Int
  stockQty    Int
  status      Int      @default(1)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  stock       Stock @relation(fields: [stockId], references: [id])

  @@index([stockId])
}

model Offer {
  id            Int            @id @default(autoincrement())
  productId     Int
  offerName     String?
  status        Int            @default(1)
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
  offerImage    String?
  product       Product        @relation(fields: [productId], references: [id])
  productPrices ProductPrice[]

  @@index([productId])
  @@index([status])
}

model Order {
  id             Int      @id @default(autoincrement())
  guestUserId    Int?
  customerId     Int
  orderTracking  String   @unique
  orderPlace     String
  orderType      OrderType @default(PENDING)
  orderStatus    Int      @default(0)
  status         Int      @default(1)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  customer       Customer  @relation(fields: [customerId], references: [id])
  guestUser      GuestUser? @relation(fields: [guestUserId], references: [id])

  orderItems     OrderItem[]

  @@index([guestUserId])
  @@index([customerId])
  @@index([orderStatus])
  @@index([status])
}
enum OrderType {
  COMPLETE
  PENDING
  PROCESS
}
model OrderItem {
  id             Int @id @default(autoincrement())
  orderId        Int
  productPriceId Int
  quantity       Int
  price          Int

  order          Order        @relation(fields: [orderId], references: [id])
  productPrice   ProductPrice @relation(fields: [productPriceId], references: [id])

  @@index([orderId])
  @@index([productPriceId])
}

model Customer {
  id             Int      @id @default(autoincrement())
  name           String?
  email          String?  @unique
  contractNumber Int      @unique
  address        String?
  status         Int      @default(1)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  orders         Order[]

  @@index([email])
  @@index([status])
}

model GuestUser {
  id              Int              @id @default(autoincrement())
  name            String?
  email           String           @unique
  phone           String?
  password        String
  image           String?
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt
  orders          Order[]
  userResetTokens UserResetToken[]
  wishlists        Wishlist[]
}

model UserResetToken {
  id            Int       @id @default(autoincrement())
  guestUserId   Int
  email         String?
  tokenRemember String    @unique
  expiryAt      DateTime
  createdAt     DateTime  @default(now())
  guestUser     GuestUser @relation(fields: [guestUserId], references: [id])

  @@index([guestUserId])
  @@index([expiryAt])
}

model ProductStatus {
  id         Int       @id @default(autoincrement())
  statusName String    @unique
  status     Int       @default(1)
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
  products   Product[]

  @@index([status])
}

model Subscribe {
  id         Int       @id @default(autoincrement())
  email      String    
  status     Int       @default(1)
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt

  @@index([email])
}

model ContractInformation {
  id         Int       @id @default(autoincrement())
  name       String
  email      String    @unique
  message    String?
  status     Int       @default(1)
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt

  @@index([email])
}

model Wishlist {
  id         Int       @id @default(autoincrement())
  gestUserId Int
  email      String
  message    String?
  status     Int       @default(1)
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt

  guestUser     GuestUser @relation(fields: [gestUserId], references: [id])

  @@index([gestUserId])

  @@index([email])
}
