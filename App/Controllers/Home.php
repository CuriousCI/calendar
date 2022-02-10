<?php

namespace App\Controllers;

use \Core\View;
use \App\Models\Event;

/**
 * Home controller
 *
 * PHP version 7.0
 */
class Home extends \Core\Controller
{

	/**
	 * Show the index page
	 *
	 * @return void
	 */
	public function indexAction()
	{
		View::renderTemplate('Home/index.html');
	}

	public function eventsJsonAction()
	{
		$events = Event::getAll();
		echo json_encode($events);
	}
}
