export interface User {
    id: String ,
    userName: String,
    email: String, 
    password: String,
    createdAt: Date,
    updatedAt: Date,
}


export interface Timecard {
    id: String,
    userId: String,
    startedAt: Date,
    endedAt: Date,
    createdAt: Date,
    updatedAt: Date,
}

export interface Account {
    id: String,
    userId: String,
    type: String,
    provider: String,
    providerAccountId: String,
    refresh_token: String,
    access_token:  String,
    expires_at: any,
    token_type: String,
    scope: String,
    id_token: String,
    session_state: String,
    


}


// id          Int     @id @default(autoincrement())
//   userId      Int
//   startedAt   DateTime
//   endedAt     DateTime
//   createdAt   DateTime  @default(now())
//   updatedAt   DateTime  @updatedAt