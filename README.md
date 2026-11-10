🛞 Tire Inventory

A simple, fast tire inventory app built with HTML, CSS, and vanilla JavaScript. No frameworks or libraries.

I built it to solve a real problem at my job: keeping track of which tires are in stock, so anyone at the front desk can answer "Do we have a 225/55R17?" in seconds.

Features
Add tires with brand, size, quantity, price, and type (Summer, Winter, All Season, or Farm Implement)
Edit quantity right on the tire's card. Click Edit, type the new amount, and click Apply. Handy for marking sales or logging a restock.
Delete tires you no longer carry
Live search by brand or size. Results update as you type.
Filter by type with the dropdown, alongside the search
Low-stock warning: any tire with 2 or fewer in stock turns yellow and shows a "Low stock" badge
Saves automatically: your inventory stays put after a page refresh, using the browser's localStorage
Input validation: blank entries are blocked, quantities can't go negative, and prices always show two decimals ($129.99)
Built With
Technology	Used For
HTML5	Page structure and the add-tire form
CSS3	Layout (Flexbox), card styling, color-coded buttons
JavaScript (ES6)	DOM updates, event listeners, search and filter logic
localStorage	Saving the inventory in the browser
How to Run It

No installation needed.

Download or clone this repository
Open index.html in any modern browser (Chrome, Edge, Firefox)
Start adding tires
Project Structure
tire-inventory/
├── index.html   → page layout, add form, and search bar
├── style.css    → all styling and colors
└── script.js    → app logic: add, edit, delete, search, save
What I Learned

This was my first real JavaScript project. Along the way I learned:

How to create and update page elements with JavaScript (createElement, appendChild, classList)
How to respond to user actions with event listeners (submit, click, input)
How to save and load data with localStorage, JSON.stringify, and JSON.parse
How to search and filter arrays with filter() and includes()
How to debug: reading console errors, and learning the hard way that a variable has to be created before it's used 😅
How to find the right item when a search is active, using indexOf() instead of a list position, so Delete always removes the correct tire
Roadmap

Planned features:

 Export backup: download the inventory as a file
 Import backup: load a saved file back in
 Card layout upgrade: bold brand name with details listed underneath
 Shared online database (like Firebase or Supabase), so multiple computers at work can see the same inventory in real time
Author

Brennan Peterson Aspiring software engineer
