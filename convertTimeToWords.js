/*********************************************
* convertNumberToWords
* parameter: num (number)
* used to convert a number to words
*********************************************/
function convertNumberToWords(num)
{
	var numberInWords = ""; //initialize to empty string
	switch(num)
	{
		case 0:
			numberInWords = "zero";
			break;
		case 1:
			numberInWords = "one";
			break;
		case 2:
			numberInWords = "two";
			break;
		case 3:
			numberInWords = "three";
			break;
		case 4:
			numberInWords = "four";
			break;
		case 5:
			numberInWords = "five";
			break;
		case 6:
			numberInWords = "six";
			break;
		case 7:
			numberInWords = "seven";
			break;
		case 8:
			numberInWords = "eight";
			break;
		case 9:
			numberInWords = "nine";
			break;
		case 10:
			numberInWords = "ten";
			break;
		case 11:
			numberInWords = "eleven";
			break;
		case 12:
			numberInWords = "twelve";
			break;
		case 13:
			numberInWords = "thirteen";
			break;
		case 14:
			numberInWords = "fourteen";
			break;
		case 15:
			numberInWords = "quarter";
			break;
		case 16:
			numberInWords = "sixteen";
			break;
		case 17:
			numberInWords = "seventeen";
			break;
		case 18:
			numberInWords = "eighteen";
			break;
		case 19:
			numberInWords = "nineteen";
			break;
		case 20:
			numberInWords = "twenty";
			break;
		case 21:
			numberInWords = "twenty one";
			break;
		case 22:
			numberInWords = "twenty two";
			break;
		case 23:
			numberInWords = "twenty three";
			break;
		case 24:
			numberInWords = "twenty four";
			break;
		case 25:
			numberInWords = "twenty five";
			break;
		case 26:
			numberInWords = "twenty six";
			break;
		case 27:
			numberInWords = "twenty seven";
			break;
		case 28:
			numberInWords = "twenty eight";
			break;
		case 29:
			numberInWords = "twenty nine";
			break;
		case 30:
			numberInWords = "half";
			break;
		default:
			numberInWords = null;
			break;
	}
	return numberInWords;

}

/************************************************
* converTimeToWords
* Parameters: hours (number), minutes (number)
* Used to create a sentence reflecting what time
* it is based off the hours and minutes provided.
************************************************/
function convertTimeToWords(hours, minutes)
{
	var isCloserToNextHour = false;
	var timeInWords = null
	hours = Number(hours);
	minutes = Number(minutes);
	
	if (minutes >= 30)
	{
		if (minutes > 30)
		{
			isCloserToNextHour = true;
			hours++;
		}

		minutes = 60 - minutes;		
	}
	
	if (hours > 12)
	{
		hours -= 12;
	}
	
	var hoursInWords = convertNumberToWords(hours);
	var minutesInWords = convertNumberToWords(minutes);
	var plural = minutes > 1 ? "s" : ""; // used to plural minutes if there are multiple minutes
	
	if (isCloserToNextHour) //if closer to the next hour use to instead of past
	{
		if (minutes % 15 == 0)
		{
			timeInWords = `${minutesInWords} to ${hoursInWords}`;
		}
		else
		{
			timeInWords = `${minutesInWords} minute${plural} to ${hoursInWords}`;
		}
	}	
	else
	{
		if (minutes != 0)
		{
			if (minutes % 15 == 0)
			{
				timeInWords = `${minutesInWords} past ${hoursInWords}`;
			}
			else
			{
				timeInWords = `${minutesInWords} minute${plural} past ${hoursInWords}`;
			}
		}
		else
		{
			timeInWords = `${hoursInWords} o\' clock`;
		}
	}
	
	console.log(timeInWords);
	return timeInWords;
}
