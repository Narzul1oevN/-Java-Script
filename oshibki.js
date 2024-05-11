// try {
//     let result = 10 / 0; // Попытка деления на ноль
//     console.log(result); // Этот код не будет выполнен из-за ошибки
// } catch (error) {
//     console.log("Произошла ошибка:", error.message); // Обработка ошибки деления на ноль
// }



// try {
//     let obj = {name: "John"};
//     console.log(obj.age); // Обращение к несуществующему свойству
// } catch (error) {
//     console.log("Произошла ошибка:", error.message); // Обработка ошибки доступа к несуществующему свойству
// }



// try {
//     // Какой-то код, который может вызвать ошибку
// } catch (error) {
//     console.log("Произошла ошибка:", error.message); // Обработка ошибки
// } finally {
//     console.log("Этот код выполнится всегда, независимо от того, была ли ошибка или нет");
// }




// try {
//     // Какой-то код, который может вызвать ошибку
// } catch (error) {
//     // Логирование ошибки с использованием сторонней библиотеки, например, Sentry
//     Sentry.captureException(error);
// }