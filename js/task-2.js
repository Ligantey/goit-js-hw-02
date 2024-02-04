 // Задача 2. Форматування повідомлення

// function formatMessage(message, maxLength) {

// }

function checkAccess(subType) {
    if (subType === "pro" || "vip" ){
      return "true";
    } else {
      return "false";
    }
    }
    checkAccess("pro");
    
    // Виклик checkAccess("pro") повертає true
    // Виклик checkAccess("starter") повертає false
    // Виклик checkAccess("vip") повертає true
    // Виклик checkAccess("free") повертає false