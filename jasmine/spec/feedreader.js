/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL are defined and not empty', function(){


             //we use for loop and feed variable to access each field in allFeed function
            for(let feed of allFeeds){

                //to check url variable is defined
                expect(feed.url).toBeDefined();
                
                //to check url variable is not empty
                expect(feed.url.length).not.toBe(0);
            }
            
           
        });

        


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */


        it('name are defined and not empty', function(){

            for(let feed of allFeeds){

                 //to check name variable is defined
                expect(feed.name).toBeDefined();

                //to check name variable is not empty
                expect(feed.name.length).not.toBe(0);
            }
           
        });
    });

      

        /* TODO: Write a new test suite named "The menu" */
        describe('The menu', function() {
            // we use varible tagbody to store refrence from body tag
            const tagbody = document.querySelector('body');

           // we use varible classtaga to store the class for tag a
            const classtaga = document.querySelector('a.menu-icon-link');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

            it('is hidden by default', function() {

                //to check the body has class menu-hidden
                expect(tagbody.className).toBe("menu-hidden");
            });

        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

            it('shows or hide when the menu icon is clicked', function() {

                //click to open the menu
                classtaga.click();

                //we check the body no to have class menu-hidden
                expect(tagbody.classList.contains('menu-hidden')).toBe(false);
                
                
                //click to close the menu
                classtaga.click();

                //we check the body have class menu-hidden
                expect(tagbody.classList.contains('menu-hidden')).toBe(true);
                
             });
        });

        
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
    /* TODO: Write a test that ensures when the loadFeed
            * function is called and completes its work, there is at least
            * a single .entry element within the .feed container.
            * Remember, loadFeed() is asynchronous so this test will require
            * the use of Jasmine's beforeEach and asynchronous done() function.
            */

           //we use beforeach before loade any feed
           beforeEach(function (done) {
			loadFeed(0, done);
            });

        
        it('there is at least a single entry element within the feed container', function () {
			const entryclass = document.querySelectorAll('.feed .entry');
			expect(entryclass.length).toBeGreaterThan(0);
		});


    });

        

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var oldFeed;
        var  newfeed;
       
        /* TODO: Write a test that ensures when a new feed is loaded
                * by the loadFeed function that the content actually changes.
                * Remember, loadFeed() is asynchronous.
                */

                //we use beforeach before loade any feed
               beforeEach(function(done) {
                   
                   //we call the function loadfeed 
                loadFeed(0, function() {

                    // we store the feed
                     oldFeed = $('.feed').html();

                    // we call agine to fetch newer feed
                    loadFeed(1, done);
                });
            });
    
            it('the content actually changed', function() {

                //and take new feed 
                newfeed = $('.feed').html();
                
                //and we check not the same feed
                expect(newfeed).not.toBe(oldFeed);

            });
        });
    
}());
