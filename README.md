## Events
* User types question, optionA and optionB
* create poll button calls renderPoll function and displayCurrentPoll function to display current poll in DOM
* Vote option A and B buttons increment state and dispay vote count in current poll
* subtract vote buttons decrement vote count and display count in current poll section
* Onclick of submit poll button a new poll is created in fetch-utils.js (this creates this poll in supabase) and is inserted into table in supabase
* in display poll function, getPoll function is called which gets polls from supabase tables
* variable created for get poll and then use for loop to loop through polls in supabase
* call renderPoll function to render each pool in loop and then append each poll to past polls section.

## List of tools used 
* formData = new FormData('pollForm)
* data.get('names of form inputs)

* renderPoll function
* displayCurrentPoll function
* ++, --
* async await functions 
* for loop

