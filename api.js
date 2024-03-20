async function getUser(id = 1) {
  let result;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener el usuario");
    }
    const user = await response.json();
    result = user;
  } catch (error) {
    console.error("Error:", error);
    // Mostrar una alerta de error utilizando SweetAlert
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Hubo un error al obtener el usuario",
    });
    result = null; // Devolver null en caso de error
  }finally{
    return result;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

async function insertUser() {
  const user = await getUser(getRandomNumber());
  if (!user) {
    document.getElementById("user").innerHTML = "Desconocido";
    return;
  }
  document.getElementById("user").innerHTML = user.name;
  document.getElementById("title").innerHTML =
    "Stock Actual de " + user?.address?.city;
  
}

insertUser();

