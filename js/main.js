            
        
        function loadDates() {
            //load data from file
            //get an array of date objects
            
            ds = [];
            
            for (i=0; i<exclusions.holidays.length; i++) {
                var d = Date.parse(exclusions.holidays[i].Date);
                ds.push(d);
            
            }
            
            return ds;
            
        }    
        
        function dateInList(theDate, theList) {
            theDate.setHours(0,0,0,0);
            for (i=0; i<theList.length; i++) {
                console.log("x="+theList[i]);
                if (theDate.getTime() == theList[i] ) {
                    console.log("Yes.");
                    return true;   
                }
                else {
                    console.log("No.");
                }
            }
            return false;
        }
            
        function doIMoveIt() {
            var isSuspended = dateInList(today, datez);
              
            
            if (isSuspended)
                return "No.";
            else
                return "Yes."
        }
            
        var datez = loadDates();
        var today = new Date();    
            
   
            
            
        var theData           = {answer: doIMoveIt()};
        var theTemplateScript = $("#stag").html();
        var theTemplate       = Handlebars.compile(theTemplateScript);    