
function currencyPrettyDate(data) {
    const dia = data.split("T")[0].split("-")[2];
    const mes = data.split("T")[0].split("-")[1];
    const ano = data.split("T")[0].split("-")[0];
  
    const hora = data.split("T")[1].split(":")[0];
    const minuto = data.split("T")[1].split(":")[1];
    const segundo = data.split("T")[1].split(":")[2];
  
    let labelMes;

    switch (mes) {
        case "01":
          labelMes = "Janeiro";
          break;
        case "02":
          labelMes = "Fevereiro";
          break;
        case "03":
            labelMes = "Março";
            break;
          case "04":
            labelMes = "Abril";
            break;
          case "05":
            labelMes = "Maio";
            break;
          case "06":
            labelMes = "Junho";
            break;
          case "07":
            labelMes = "Julho";
            break;
          case "08":
            labelMes = "Agosto";
            break;
          case "09":
            labelMes = "Setembro";
            break;
          case "10":
            labelMes = "Outubro";
            break;
          case "11":
            labelMes = "Novembro";
            break;
            case "12":
      labelMes = "Dezembro";
      break;
  }

  const dataLabel = `Em ${dia} de ${labelMes} de ${ano}, ${hora}:${minuto}`;

  return dataLabel; 
}

export default currencyPrettyDate;