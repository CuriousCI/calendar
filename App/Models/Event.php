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
		$stmt = $db->query('SELECT titolo, nome, cognome, costo FROM eventi JOIN utenti ON organizzatore = utente_id');
		$result = array();


		if ($stmt->num_rows > 0) {
			// output data of each row
			while ($row = $stmt->fetch_assoc()) {
				$obj = [
					"name" => $row["titolo"],
					"organizer" => $row["nome"] . " " . $row["cognome"],
					"price" => floatval($row["costo"]),
				];
				array_push($result, $obj);
			}
		}

		static::closeDB();

		return $result;
	}
}
