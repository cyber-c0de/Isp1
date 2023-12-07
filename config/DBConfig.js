const dbConfig = {
    "url": "mongodb+srv://root:1234@isp.srvjiyv.mongodb.net/?retryWrites=true&w=majority",
    "dbName": "ISP",
    "customerCollection": "CustomerDB",
    "accountCollection": "AccountDB",
    "packageCollection":"PackageDB",
    "accPacCollection":"AccPacDB"
}

const portNumber = 3000

module.exports = { dbConfig, portNumber };