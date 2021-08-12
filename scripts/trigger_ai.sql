DELIMITER $$

CREATE TRIGGER update_inventory_ai
AFTER INSERT
ON cup FOR EACH ROW
BEGIN
	IF NEW.id_type = 1 THEN
		UPDATE inventory SET quantity_inventory=quantity_inventory+1 WHERE id_inventory = 1;
	END IF;
    
    IF NEW.id_type = 2 THEN
		UPDATE inventory SET quantity_inventory=quantity_inventory+1 WHERE id_inventory = 2;
	END IF;
    
END$$

DELIMITER ;