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

	public function indexIdAction()
	{
		View::renderTemplate('Home/index_id.html');
	}

	public function eventsJsonAction()
	{
		$events = Event::getAll();
		echo json_encode($events);
	}

	public function eventsJsonIdAction()
	{
		$id = $this->route_params["id"];
		$event = Event::getEvent($id);
		echo json_encode($event);
	}
}
