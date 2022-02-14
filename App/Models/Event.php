<?php

namespace App\Models;

use PDO;

/**
 * Example user model
 *
 * PHP version 7.0
 */
class Event extends \Core\Model
{

	/**
	 * Get all the users as an associative array
	 *
	 * @return array
	 */
	public static function getAll()
	{
		$db = static::getDB();
		$stmt = $db->query('SELECT evento_id, titolo, nome, cognome, costo FROM eventi JOIN utenti ON organizzatore = utente_id');
		$result = array();


		if ($stmt->num_rows > 0) {
			// output data of each row
			while ($row = $stmt->fetch_assoc()) {
				$obj = [
					"id" => $row["evento_id"],
					"title" => $row["titolo"],
					"organizer" => $row["nome"] . " " . $row["cognome"],
					"cost" => floatval($row["costo"]),
				];
				array_push($result, $obj);
			}
		}

		static::closeDB();

		return $result;
	}

	public static function getEvent($id)
	{
		$db = static::getDB();
		$event = $db->query('SELECT titolo, nome, cognome, costo FROM eventi JOIN utenti ON organizzatore = utente_id WHERE evento_id = ' . $id);
		$participants = $db->query('SELECT nome, cognome FROM partecipanti JOIN utenti USING(utente_id) WHERE evento_id = ' . $id);

		$result = array();

		if ($event->num_rows > 0) {
			$row = $event->fetch_assoc();

			$result = [
				"title" => $row["titolo"],
				"organizer" => $row["nome"] . " " . $row["cognome"],
				"cost" => floatval($row["costo"]),
			];
		}

		$users = array();
		while ($row = $participants->fetch_assoc())
			array_push($users, $row["nome"] . " " . $row["cognome"]);

		$result['participants'] = $users;

		static::closeDB();
		return $result;
	}
}
