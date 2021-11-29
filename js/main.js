function main() {
    console.log('A')

    setTimeout(function exec() {
        console.log('C')
    }, 0)
    setTimeout(function exec() {
        console.log('B')
    }, 0)
    console.log('D')
}
main()

const pass = prompt('Enter PASS');

const mapOfMarauder = new Promise(
    (success, failed) => {
        if (pass === 'Торжественно клянусь что замышляю только шалость') {
            success('Господа Лунатик, Бродяга, Сохатый и Хвост! Поставщики вспомогательных средств для волшебников-шалунов с гордостью представляют свое новейшее изобретение КАРТУ МАРОДЕРОВ.')
        } else {
            failed('Господа Лунатик, Сохатый, Бродяга и Хвост приветствуют мистера Снейпа и требуют, что бы он не совал свой нос не в свои дела.')
        }
    })

function askPass() {
    mapOfMarauder
   .then(result => {
      console.log(result)
    })
   .catch(error => {
      console.log(error)
    })
};

askPass();
   

function name(params) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Ошибка!")), 1000);
        setTimeout(() => resolve('SUCCESS'), 2000);
    });
    // .catch(f) это тоже самое, что promise.then(null, f)
    promise.catch(console);
    promise.then(console.log)
}