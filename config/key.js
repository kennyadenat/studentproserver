module.exports = {
  google: {
    clientID: "161594787789-c13ia93f9uqo65pkj1h85p9jmujqo1rd.apps.googleusercontent.com",
    clientSecret: "iR1rCyR6stHJmB9aMX6abxhj",
    callbackURL: "/auth/google/redirect"
  },
  mongodb: {
    url: "mongodb://localhost:27017/studentpro",
    prod: "mongodb+srv://studentpro:Iremide-09@vigorlab-4gwpc.mongodb.net/studentpro",
    dev: "mongodb://studentpro:Iremide-09@vigorlab-shard-00-00-4gwpc.mongodb.net:27017,vigorlab-shard-00-01-4gwpc.mongodb.net:27017,vigorlab-shard-00-02-4gwpc.mongodb.net:27017/seedpro?ssl=true&replicaSet=Vigorlab-shard-0&authSource=admin&retryWrites=true",
    dbName: "studentpro"
  },
  session: {
    cookieKey: "ycangehtyurjnghnk2258795nnfhndvj4iunfurnnbg"
  },
  secret: "edrxfctgvyhubijnko5467yuiordcfv45655fgdttejdorywudn756672mmsgyfus",
  port: process.env.PORT || 4000
}