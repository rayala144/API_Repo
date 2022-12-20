const sql = require('mysql2');

    const con = sql.createConnection (
        {

            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'test'
        }
    )

    function getMobiles(id) {

        return new Promise(function(success, reject){
            if(id) {
                con.query(`SELECT * FROM mobiles WHERE id=?`,[id], function(err,rows,col){
                    if(err){
                        reject(500)
                    }
                    else{
                        success(rows)
                    }
        
                    // con.end();
        
                })
            }

            else {
                con.query(`SELECT * FROM mobiles`, function(err,rows,col){
                    if(err){
                        reject(500)
                    }
                    else{
                        success(rows)
                    }
        
                    // con.end();
        
                })
            }
            
        })
       
    }

    function addMobile(n,p,r,s){
        // console.log(`${n},${p},${r},${s}`);
        return new Promise(function(success, reject){
            con.query(
                `
                INSERT INTO mobiles (name, price, ram, storage) VALUES(?,?,?,?)`, [n,p,r,s],
                
                 function(err, rows, col) {
                    if(err){
                        reject(500)
                    }
                    else{
                        success(rows)
                    }
                }
            )
        })
        
    }
//    // getMobiles()
//    addMobile('OnePlus',40000,'8Gb','128Gb')
function updateMobile(n,p,r,s,id){
    // console.log(70,`${n},${p},${r},${s}`);
    return new Promise(function(success, reject){
        con.query(
            `
            UPDATE mobiles SET name=?, price=?, ram=?, storage=? WHERE id=? `, [n,p,r,s,id],
            
             function(err, rows, col) {
                if(err){
                    console.log(err)
                    
                    reject(500)
                }
                else{
                    console.log(rows)
                    
                    success(rows)
                }
            }
        )
    })
    
}

function deleteMobile(id){
    // console.log(`${n},${p},${r},${s}`);
    return new Promise(function(success, reject){
        getMobiles()
        .then((rows)=>{
            console.log(94,rows)
            if(rows.length>0){
                con.query(
                    `
                    DELETE FROM mobiles WHERE id =?`, [id],
            
                     function(err, rows) {
                        if(err){
                            console.log(101,err)
                            reject(500)
                        }
                        else{
                            console.log(105,rows)
                            
                            success(rows)
                        }
                    }
                )
            }
            else{
                reject(404)
                
            }
        })
        
    })
    
}

module.exports ={
    addMobile, getMobiles, updateMobile, deleteMobile
}