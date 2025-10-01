/*!
 * custom js by humbelbillybob
 */

 //quote randomizer
		   
		   var quote01 = 'A style is the consequence of recurrent habits, restraints, or rules invented or inherited, written or overheard, intuitive or preconceived.';
		   var quote02 = 'Without the aesthetic, the computer is but a mindless speed machine, producing effects without substance, form without relevant content, or content without meaningful form.';
		   var quote03 = 'Design is a way of life, a point of view. It involves the whole complex of visual communications: talent, creative ability, manual skill, and technical knowledge. Aesthetics and economics, technology and psychology are intrinsically related to the process.';
		   
		   
		   var myArray = [quote01,quote02,quote03];
		   var rand = myArray[Math.floor(Math.random() * myArray.length)];
		   window.onload = function() {
			   document.getElementById("HBB_quote").innerHTML=rand;
		   }
