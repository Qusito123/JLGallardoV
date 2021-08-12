CREATE DATABASE IF NOT EXISTS market;

USE market;

CREATE TABLE IF NOT EXISTS cup_type(
	id_type INT NOT NULL AUTO_INCREMENT,
    name_type VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_type)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS color(
	id_color INT NOT NULL AUTO_INCREMENT,
    name_color VARCHAR(25) NOT NULL,
    PRIMARY KEY (id_color)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS material(
	id_material INT NOT NULL AUTO_INCREMENT,
    name_material VARCHAR(25) NOT NULL,
    PRIMARY KEY (id_material)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS cup(
	id_cup INT NOT NULL AUTO_INCREMENT,
    id_type INT NOT NULL,
    id_color INT NOT NULL,
    dimentions_cup VARCHAR(50) NOT NULL,
    capacity_cup CHAR(7) NOT NULL,
    model_cup VARCHAR(20) NOT NULL,
    id_material INT NOT NULL,
    PRIMARY KEY (id_cup)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS inventory(
	id_inventory INT NOT NULL AUTO_INCREMENT,
    id_type INT NOT NULL,
    quantity_inventory INT NOT NULL,
    PRIMARY KEY (id_inventory)
) engine = InnoDB;

INSERT INTO cup_type(name_type) VALUES('Calidad alta');
INSERT INTO cup_type(name_type) VALUES('Calidad baja');

INSERT INTO color(name_color) VALUES('Rojo');
INSERT INTO color(name_color) VALUES('Azul');
INSERT INTO color(name_color) VALUES('Verde');
INSERT INTO color(name_color) VALUES('Marron');
INSERT INTO color(name_color) VALUES('Blanco');
INSERT INTO color(name_color) VALUES('Negro');
INSERT INTO color(name_color) VALUES('Morado');
INSERT INTO color(name_color) VALUES('Cyan');

INSERT INTO material(name_material) VALUES('Ceramica');
INSERT INTO material(name_material) VALUES('Barro');
INSERT INTO material(name_material) VALUES('Porcelana');
INSERT INTO material(name_material) VALUES('Metal');
INSERT INTO material(name_material) VALUES('Cristal');
INSERT INTO material(name_material) VALUES('Plastico');

INSERT INTO inventory(id_type, quantity_inventory) VALUES(1,0);
INSERT INTO inventory(id_type, quantity_inventory) VALUES(2,0);