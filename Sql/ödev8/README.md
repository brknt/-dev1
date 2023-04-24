-- 1.test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.


`CREATE TABLE employee (
	id INTEGER PRIMARY KEY,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);`



-- 2.Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.


`
insert into employee (id, name, birthday, email) values (1, 'Verge', '1910-02-09', 'vwhithalgh0@addthis.com');
insert into employee (id, name, birthday, email) values (2, 'Alvira', '1910-08-23', 'alascelles1@4shared.com');
insert into employee (id, name, birthday, email) values (3, 'Christoforo', '1911-11-18', 'cogelsby2@eventbrite.com');
insert into employee (id, name, birthday, email) values (4, 'Betti', '1984-05-02', 'bogleasane3@mediafire.com');
insert into employee (id, name, birthday, email) values (5, 'Kayley', '1961-10-14', 'kstokoe4@163.com');
insert into employee (id, name, birthday, email) values (6, 'Amitie', '1965-07-08', 'asolleme5@artisteer.com');
insert into employee (id, name, birthday, email) values (7, 'Giralda', '1946-05-04', 'geberz6@aboutads.info');
insert into employee (id, name, birthday, email) values (8, 'Maritsa', '1934-11-27', 'mneames7@liveinternet.ru');
insert into employee (id, name, birthday, email) values (9, 'Caryn', '1954-06-29', 'cdanihel8@netvibes.com');
insert into employee (id, name, birthday, email) values (10, 'Emmott', '1976-06-13', 'eballaam9@odnoklassniki.ru');
insert into employee (id, name, birthday, email) values (11, 'Charity', '1914-11-18', 'chamfletta@msn.com');
insert into employee (id, name, birthday, email) values (12, 'Herc', '1968-04-26', 'hmackainb@pinterest.com');
insert into employee (id, name, birthday, email) values (13, 'Alana', '1993-08-08', 'ahaspineallc@163.com');
insert into employee (id, name, birthday, email) values (14, 'Hal', '1937-12-29', 'hgoodlipd@people.com.cn');
insert into employee (id, name, birthday, email) values (15, 'Alon', '1962-01-06', 'ahardwiche@cocolog-nifty.com');
insert into employee (id, name, birthday, email) values (16, 'Ewen', '1986-03-12', 'edominicof@gnu.org');
insert into employee (id, name, birthday, email) values (17, 'Jean', '1907-01-08', 'jdelafoyg@ihg.com');
insert into employee (id, name, birthday, email) values (18, 'Benoite', '1904-12-26', 'bspareh@vistaprint.com');
insert into employee (id, name, birthday, email) values (19, 'Aldrich', '1934-11-15', 'achami@scientificamerican.com');
insert into employee (id, name, birthday, email) values (20, 'Morten', '1997-11-14', 'mriddeoughj@simplemachines.org');
insert into employee (id, name, birthday, email) values (21, 'Aeriel', '1902-04-21', 'abenainek@tamu.edu');
insert into employee (id, name, birthday, email) values (22, 'Edeline', '1930-07-10', 'emackeyl@paypal.com');
insert into employee (id, name, birthday, email) values (23, 'Wyatt', '1925-07-30', 'wpaulingm@zdnet.com');
insert into employee (id, name, birthday, email) values (24, 'Gilberta', '1990-08-15', 'ghonischn@bandcamp.com');
insert into employee (id, name, birthday, email) values (25, 'Kaitlin', '1904-04-20', 'knorrieo@webmd.com');
insert into employee (id, name, birthday, email) values (26, 'Marna', '1906-05-12', 'mfogartyp@wordpress.org');
insert into employee (id, name, birthday, email) values (27, 'Packston', '1972-01-18', 'pberthomeq@naver.com');
insert into employee (id, name, birthday, email) values (28, 'Roselin', '1933-03-10', 'rcallinghamr@indiegogo.com');
insert into employee (id, name, birthday, email) values (29, 'Perceval', '1954-06-11', 'pstronoughs@taobao.com');
insert into employee (id, name, birthday, email) values (30, 'Joceline', '1992-03-01', 'jdennerlyt@comcast.net');
insert into employee (id, name, birthday, email) values (31, 'Cathryn', '1905-07-15', 'cbarbeu@latimes.com');
insert into employee (id, name, birthday, email) values (32, 'Aurore', '1968-02-27', 'afeitosav@goo.gl');
insert into employee (id, name, birthday, email) values (33, 'Bliss', '1992-01-19', 'blarivew@bloglovin.com');
insert into employee (id, name, birthday, email) values (34, 'Freddy', '1919-02-21', 'fkipplingx@ocn.ne.jp');
insert into employee (id, name, birthday, email) values (35, 'Wallis', '1993-12-19', 'wmaclurey@unicef.org');
insert into employee (id, name, birthday, email) values (36, 'Jakie', '1980-10-01', 'jcrackelz@meetup.com');
insert into employee (id, name, birthday, email) values (37, 'Rolfe', '1959-02-19', 'rswaite10@gravatar.com');
insert into employee (id, name, birthday, email) values (38, 'Travus', '1977-05-13', 'tyetman11@elpais.com');
insert into employee (id, name, birthday, email) values (39, 'Gusella', '1946-12-25', 'gcarlino12@yolasite.com');
insert into employee (id, name, birthday, email) values (40, 'Marty', '1959-04-16', 'mseeney13@soundcloud.com');
insert into employee (id, name, birthday, email) values (41, 'Rose', '1935-06-26', 'rbrigman14@bloglovin.com');
insert into employee (id, name, birthday, email) values (42, 'Ermengarde', '1931-10-16', 'ebrute15@webmd.com');
insert into employee (id, name, birthday, email) values (43, 'Henrieta', '1910-12-26', 'hhatliff16@blog.com');
insert into employee (id, name, birthday, email) values (44, 'Jude', '1950-03-15', 'jcouronne17@nytimes.com');
insert into employee (id, name, birthday, email) values (45, 'Adele', '1963-07-01', 'afivey18@businessweek.com');
insert into employee (id, name, birthday, email) values (46, 'Otis', '1940-07-04', 'otunney19@smh.com.au');
insert into employee (id, name, birthday, email) values (47, 'Fredi', '1919-05-19', 'fashbee1a@facebook.com');
insert into employee (id, name, birthday, email) values (48, 'Nolie', '1960-03-16', 'nbatrip1b@cam.ac.uk');
insert into employee (id, name, birthday, email) values (49, 'Porty', '1942-12-07', 'ppoolman1c@omniture.com');
insert into employee (id, name, birthday, email) values (50, 'Woody', '1947-09-02', 'wmilmore1d@walmart.com');
`


-- 3.Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.


`
UPDATE employee SET name = 'updateName' WHERE id = 1 RETURNING*;
UPDATE employee SET birthday = '2000-06-23' WHERE email = 'fashbee1a@facebook.com' RETURNING*;
UPDATE employee SET email = 'nolie@gmail.com' WHERE name = 'Nolie' RETURNING*;
UPDATE employee SET name = 'updateName2' WHERE name LIKE 'S%'  RETURNING*;
UPDATE employee SET name = 'BIG' WHERE birthday = (SELECT MIN(birthday) FROM employee  ) RETURNING*;
`

-- 4.Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.


`
DELETE FROM employee WHERE id = 3 RETURNING*;
DELETE FROM employee WHERE name ='Alon' RETURNING*;
DELETE FROM employee WHERE birthday > '1999-01-01' RETURNING*;
DELETE FROM employee WHERE email = 'fkipplingx@ocn.ne.jp' RETURNING*;
DELETE FROM employee WHERE name = 'B%' RETURNING*;
`