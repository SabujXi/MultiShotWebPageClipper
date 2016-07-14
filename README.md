# MultiShotWebPageClipper
Save a full web page to pdf or create multiple screenshot of smaller parts of the page like news thumbnail (image + subtitle) only with a simple selector.)

To run this piece of code you need to have PhantomJS installed. Before running it open the MultiShotWebPageClipper.js with plain text editor like Sublime Text/Notepad++/gedit/vim/nano etc. and manipulate the variables: theUrl, theQuerySelector and displayWidth as you desire.

To save the page mentioned in theUrl variale as the pdf you need to set the theQuerySelector to "--doc--" and run the script. If you want to save multiple sinppet of the web page as png image you need to find the css selector of that element and put it in the theQuerySelector. Run the script and all matching element in the page would be saved in the current directory as clip1.png, clip2.png, etc.

To run the script fire up your linux/windows/mac command line terminal and write "phantomjs MultiShotWebPageClipper.js", hit enter, wait for some time until it returns and go to the current directory and you would get loads of clip.png files or page.pdf.
