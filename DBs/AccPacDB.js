const dbConfig = require('./../config/DBConfig').dbConfig;
const dbConnection = require('./../DBConnections/DBConnections');
const {ObjectId} = require("mongodb");

class accPacCollection{
    // static async addAccPac(insertPayload) {
    //     try {
    //         let date=new Date();
    //         let accPacPayload= {
    //           cid:ObjectId(insertPayload.cid),
    //           pid:ObjectId(insertPayload.pid),
    //           activeDate: date.getFullYear() +'-' +(date.getMonth() + 1) +'-' +date.getDate()
    //         }
    //         const selectedCollection = await dbConnection(dbConfig.accPacCollection);
    //         const result = await selectedCollection.insertOne(accPacPayload);
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    static async updateAccPac(updatePayload) {
        const selectedCollection = await dbConnection(dbConfig.accPacCollection);
        let result = await selectedCollection.updateOne({cid:ObjectId(updatePayload.cid)},{$set:{pid:ObjectId(updatePayload.pid)}},{upsert:true});
        return result;
    }

    static async getAllAccPac() {
        let selectedCollection = await dbConnection(dbConfig.accPacCollection);
        let result = await selectedCollection.find({}).toArray();
        return result;
    }

    static async pacById(criteria) {
        // console.log("CRITERIA in pacbyid",criteria);
        let selectedCollection = await dbConnection(dbConfig.accPacCollection);
        let result = await selectedCollection.findOne({"cid":ObjectId(criteria.cid)});
        // console.log("resultin pacbyid",result);
        return result;
    }
}

module.exports = accPacCollection;