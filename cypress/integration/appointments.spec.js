//booking
  // Visits the root of our web server
  // Clicks on the "Add" button in the second appointment
  // Enters their name
  // Chooses an interviewer
  // Clicks the save button
  // Sees the booked appointment
  

  //editing
  // Visits the root of our web server
  // Clicks the edit button for the existing appointment
  // Changes the name and interviewer
  // Clicks the save button
  // Sees the edit to the appointment

  //canceling
  // Visits the root of our web server
  // Clicks the delete button for the existing appointment
  // Clicks the confirm button
  // Sees that the appointment slot is empty

  describe("shoul book an interview", () => {

    it("booking", () => {
      cy.visit("/");
      cy.contains("Monday");
    })
  })