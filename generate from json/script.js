document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputForm').addEventListener('submit', function(event) {
        event.preventDefault();

 

    // Get user input values
    
    var roll = document.getElementById('roll').value;
    // Extract department from roll number
    

    // Extract year from roll number
    var joinYear = "20" + roll.substring(0, 2);

    fetch('output.json')
    .then(response => response.json())
    .then(data => {
        var studentData = data.find(function(student) {
            return student["Roll No"] === roll;
        });

        if (studentData) {
            var name = studentData["Student Name"];
            joinYear = parseInt(joinYear);
            var department = roll.substring(4, 7);
        if(department == "CSA") {
            department = "CSE A";
        } else if (department == "CSB") {
            department = "CSE B";
        }
            var gradYear = joinYear + 4;

    // Generate the ID card HTML
    var idCardHTML = `
        
        
    
    <div>
        <img id="photo" src="${roll}.jpg" alt="Profile">
    </div>
     <div id="b1">
        <p id="name">${name}</p>
    </div>
    <div id="con">
        <div id="dept">
             <p id="p2">DEPARTMENT</p>
            <P id="cse">${department}</P>
    </div>
        <div id="year">
                <p id="p22">YEAR</p>
                <P id="p23">${joinYear}-${gradYear}</P>
         </div>
    </div>
    <div id="barcode">
        <img id="barcodeImage" src="" alt="Barcode">
    </div>
    <div id="rollno">
        <p>ID NO : ${roll}</p>
    </div>
  
    `;

    // Display the generated ID card
    document.getElementById('idCardContainer').innerHTML = idCardHTML;

    // Generate and display the barcode
    var barcodeImage = document.getElementById('barcodeImage');
    JsBarcode(barcodeImage, roll, {
        format: "CODE128",
        width: 300,
        height: 72
    });
} else {
    alert("Student not found with provided Roll Number.");
}
})
.catch(error => console.error('Error:', error));
});
});