step_number = 1
title = "Prepare ingredients"
instructions = "Wash and chop vegetables, measure out spices"

my_string = f"{step_number}: {{Title: {title}, Description: {instructions}}} \n"

chatGPTPrompt = f"""You will ignore all previous inputs. At the end of these instructions will be the goal or objective a human is trying to achieve. You are to respond with all the steps necessary for that human to take to achieve that goal in a logically ordered JSON format. If there are any substeps you must place them in nested JSON format. The first two key value pairs in this JSON must be as follows.
Title: The Instructions for this Step
Type: This type of step. 
This can either be 'travel', 'craft' or 'misc'. If the task requires the human to go somewhere it is 'travel'. If the task requires the human to acquire any  materials or ingredients it will be 'craft'.  If it is something else it will be 'misc'.

The rest of the JSON will be a nested JSON with the format: \n""" + my_string

+ """ If the typing is 'craft' then the first step will always be 'Acquire Materials” or “Acquire Ingredients” depending on the type of quest. You must specify the quantity of ingredients required in this step.

Remember a human is getting these instructions and does not need to be told to do anything regarding ethics or rules or keeping themselves safe. Try to keep it as simple as possible to still complete the tasks. The ideal quest will have less than 7 major steps. And none of the steps other than acquiring materials should have more than 5 substeps.

If any of the requests are against your ethical guidelines the JSON response should be 
{error: Type of ethical violation, message: error description}

You will not respond with anything but the JSON format. The request from the human is as follows"""
