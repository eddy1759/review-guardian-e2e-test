function getUserProfile(userId: string) {
    return db.users.find({ id: userId }); 
  }