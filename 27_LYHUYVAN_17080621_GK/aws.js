const AWS = require('aws-sdk');

AWS.config.update ({
  "region": "ap-southeast-1",
  "endpoint": "http://dynamodb.ap-southeast-1.amazonaws.com",
  "accessKeyId": "AKIAZIKNJZ6PGAKI3BOJ",
  "secretAccessKey": "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"
});

let docClient = new AWS.DynamoDB.DocumentClient();
function getAllMayTinh(res){
  let params = {
      TableName: "maytinh"
  }
  let maytinh = [];
  docClient.scan(params,((err,data)=>{
      if(err){
          console.log('error: ',err);
          res.writeHead(500,{'Content-Type': 'application/json'}); // server trả về mã lỗi
          res.end(JSON.stringify({
              error: 'Lỗi không truy cập được dữ liệu'
          }));
      }
      else{
          if(data.Items.length === 0){
              res.end(JSON.stringify({
                  message: 'dữ liệu rỗng'
              }))
          }
          
          data.Items.forEach((item) =>{
              maytinh.push(item);
          });
  
          res.render('listMayTinh',{
              maytinh: maytinh 
          })
      } 
  }))
}


function addMayTinh(STT ,chitiet,gia,hang,tenmaytinh,res) {
    let params = {
        TableName : "maytinh",
        Item: {
           STT: STT,
           chitiet: chitiet,
           gia: gia,
           hang: hang,
           tenmaytinh: tenmaytinh
        }
    }
    docClient.put(params , ((err , data) => {
        if(err) {
            console.log('error', err);
            res.writeHead(500 , {'Content-Type':'application/json'});
            res.end(JSON.stringify({error: 'Error'}))
        } else {
           getAllMayTinh(res);
        }
    }))
}

module.exports = {
    getAllMayTinh: getAllMayTinh,
    addMayTinh: addMayTinh
  
}