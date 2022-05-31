function transform(line) {
    var values = line.split(',');
    var obj = new Object();

    obj.Company = values[0];
    obj.Country = values[1];
    obj.Sector = values[2];
    obj.Industry = values[3];

    var jsonString = JSON.stringify(obj);
    return jsonString;
   }