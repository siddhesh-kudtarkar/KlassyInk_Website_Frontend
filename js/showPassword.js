function showpassword()
{
	var x = document.getElementById("pass_input");
	if (x.type === "password")
	{
		x.type = "text";
	}
	else
	{
		x.type = "password";
	}
}
