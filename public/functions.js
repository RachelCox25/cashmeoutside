function calculate()
{
	var number = Number(document.getElementById("input").value);

	var euro = number * 0.93;
	var pound = number * 0.82;
	var peso = number * 19.22;
	var bitcoin = number * 0.00080;


	var elem = document.getElementById("euro");
    elem.innerText = "Euros: " + euro.toString();

    var elem2 = document.getElementById("pound");
    elem2.innerText = "Pounds: " + pound.toString();

    var elem3 = document.getElementById("peso");
    elem3.innerText = "Pesos: " + peso.toString();

    var elem4 = document.getElementById("bitcoin");
    elem4.innerText = "Bitcoin: " + bitcoin.toString();

}
