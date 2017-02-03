
        // Query the database
//*****************************************************************************************************************************
//search queries
function searchParayana(tx) {
    tx.executeSql("SELECT * FROM PARAYANA where parayana like ('%" + document.getElementById("searchparayana").value + "%')", [], querySuccess, errorCB);
}

function goSearchParayana() {
    var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
    db.transaction(searchParayana, errorCB);
}


        function searchParayanaAndDate(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where date like ('%" + document.getElementById("txtDateOB").value + "%') and parayana like ('%"+document.getElementById("searchparayana").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchParayanaAndDate() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchParayanaAndDate, errorCB);
        }
        function searchParayanaAndLocation(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where location like ('%" + document.getElementById("searchlocation").value + "%') and parayana like ('%"+document.getElementById("searchparayana").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchParayanaAndLocation() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchParayanaAndLocation, errorCB);
        }
        function searchParayanaAndMedium(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where medium like ('%" + document.getElementById("searchmedium").value + "%') and parayana like ('%"+document.getElementById("searchparayana").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchParayanaAndMedium() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchParayanaAndMedium, errorCB);
        }
        function searchParayanaAndAstakam(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where astakam_count like ('%" + document.getElementById("searchastakamcount").value + "%') and parayana like ('%"+document.getElementById("searchparayana").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchParayanaAndAstakam() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchParayanaAndAstakam, errorCB);
        }
        function searchParayanaAndComment(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where comments like ('%" + document.getElementById("searchcomments").value + "%') and parayana like ('%"+document.getElementById("searchparayana").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchParayanaAndComment() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchParayanaAndComment, errorCB);
        }
        function searchDate(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where date like ('%" + document.getElementById("searchdate").value + "%')", [], querySuccess, errorCB);
        }

        function goSearchDate() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchDate, errorCB);
        }
        function searchDateAndLocation(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where date like ('%" + document.getElementById("searchdate").value + "%') and location like ('%"+document.getElementById("searchlocation").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchDateAndLocation() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchDateAndLocation, errorCB);
        }
        function searchDateAndComment(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where date like ('%" + document.getElementById("searchdate").value + "%') and comments like ('%"+document.getElementById("searchlocation").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchDateAndComment() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchDateAndComment, errorCB);
        }
        function searchLocationAndMedium(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where medium like ('%" + document.getElementById("searchmedium").value + "%') and location like ('%"+document.getElementById("searchlocation").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchLocationAndMedium() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchLocationAndMedium, errorCB);
        }
        function searchLocationAndAstakam(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where astakam_count like ('%" + document.getElementById("searchastakamcount").value + "%') and location like ('%"+document.getElementById("searchlocation").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchLocationAndAstakam() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchLocationAndAstakam, errorCB);
        }
        function searchLocationAndAstakamValue(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where astakam_value_count like ('%" + document.getElementById("searchastakamvaluecount").value + "%') and location like ('%"+document.getElementById("searchlocation").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchLocationAndAstakamValue() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchLocationAndAstakamValue, errorCB);
        }
        function searchLocationAndComments(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where comments like ('%" + document.getElementById("searchcomments").value + "%') and location like ('%"+document.getElementById("searchlocation").value+"%')", [], querySuccess, errorCB);
        }

        function goSearchLocationAndComments() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchLocationAndComments, errorCB);
        }
        function searchMedium(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where medium like ('%" + document.getElementById("searchmedium").value + "%')", [], querySuccess, errorCB);
        }

        function goSearchMedium() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchMedium, errorCB);
        }
        function searchAstakam(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where astakam_count like ('%" + document.getElementById("searchastakamcount").value + "%')", [], querySuccess, errorCB);
        }

        function goSearchAstakam() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchAstakam, errorCB);
        }
        function searchAstakamValue(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where astakam_value_count like ('%" + document.getElementById("searchastakamvaluecount").value + "%')", [], querySuccess, errorCB);
        }

        function goSearchAstakamValue() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchAstakamValue, errorCB);
        }
//*****************************************************************************************************************************
//Delete query
        function deleteRow(tx) {
            tx.executeSql('DELETE FROM PARAYANA WHERE id = ' + document.getElementById("updateID").value, [], queryDB, errorCB);
        }
        function goDelete() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(deleteRow, errorCB);
            //document.getElementById('qrpopup').style.display = 'none';
        }
        function deleteParayana(tx) {
            tx.executeSql('DELETE FROM PARAYANA WHERE parayanam = ' + document.getElementById("updateparayana").value, [], queryDB, errorCB);
        }
        function goDeleteParayana() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(deleteParayana, errorCB);
            //document.getElementById('qrpopup').style.display = 'none';
        }
//*****************************************************************************************************************************
        //Insert query
        //
        function insertDB(tx) {
            tx.executeSql('INSERT INTO PARAYANA (parayanam,date,location,medium,astakam_count,astakam_value_count,comments) VALUES ("' + document.getElementById("txtparayanam").value + '","' + document.getElementById("txtDateOB").value +
                '","' + document.getElementById("txtLocation").value + '","' + document.getElementById("txtMedium").value + '","' + document.getElementById("txtAstakamCount").value + '","' + document.getElementById("txtAstakamValueCount").value +
                '","' + document.getElementById("txtComments").value + '")');
        }

        function goInsert() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(insertDB, errorCB, successCB);
        }
//*****************************************************************************************************************************
        //Update  queries
                function editAll(tx) {
                    tx.executeSql('UPDATE PARAYANA SET location ="' + document.getElementById("editLocation").value +
                        '", date= "' + document.getElementById("updateDate").value + '", medium= "' + document.getElementById("updateMedium").value + '", astakam_count= "' + document.getElementById("updateAstakamCount").value + '", astakam_value_count= "' +
                        document.getElementById("updateAstakamValueCount").value + '", comments= "' + document.getElementById("updateComments").value + '" WHERE id = ' + document.getElementById("updateID").value, [], queryDB, errorCB);
                }

                function goEditAll() {
                    var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
                    db.transaction(editAll, errorCB);
                    //document.getElementById('qrpopup').style.display = 'none';
                }
                function editComments(tx) {
                    tx.executeSql('UPDATE PARAYANA SET comments ="' + document.getElementById("updateComments").value'" WHERE id = ' + document.getElementById("updateID").value, [], queryDB, errorCB);
                }

                function goEditComments() {
                    var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
                    db.transaction(editComments, errorCB);
                    //document.getElementById('qrpopup').style.display = 'none';
                }

//*****************************************************************************************************************************


        //Show the popup after tapping a row in table
        //
        function goPopup(row, rowname, rownum) {
            currentRow = row;
            document.getElementById("qrpopup").style.display = "block";
            document.getElementById("editNameBox").value = rowname;
            document.getElementById("editNumberBox").value = rownum;
        }
