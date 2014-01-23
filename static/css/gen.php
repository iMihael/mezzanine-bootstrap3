<?php

	$files = scandir(dirname(__FILE__));
	unset($files[0]);
	unset($files[1]);

	foreach($files as $file)
	{
		echo "<link href='css/{$file}' rel='stylesheet' type='text/css'>\n";
	}
 
