<?php

	$files = scandir(dirname(__FILE__));
	unset($files[0]);
	unset($files[1]);

	foreach($files as $file)
	{
		echo "<script type='text/javascript' src='js/{$file}'></script>\n";
	}
 
