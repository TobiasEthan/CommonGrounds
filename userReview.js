
 document.getElementById("UserInput").addEventListener("submit", function(Submit) {
    Submit.preventDefault(); 
   
    const userText = document.getElementById("Review").value;
    console.log("User entered:", userText);
    
    const newReview = document.createElement("div");
    newReview.textContent=userText;

    const container = document.getElementById("ReviewContainer");
    container.append(newReview);
    document.getElementById("displayText").textContent = "You entered: " + userText;
  });