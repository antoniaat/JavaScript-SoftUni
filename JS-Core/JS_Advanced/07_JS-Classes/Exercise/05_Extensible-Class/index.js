(function () {
    let classId = 0;

    return class Extensible {
        constructor() {
            this.id = classId++;
        }

        extend(template) {
            for (let property in template) {
                if (typeof (template[property]) == 'function') {
                    let parent = Object.getPrototypeOf(this);
                    parent[property] = template[property];
                } else {
                    this[property] = template[property];
                }
            }
        }
    }
}())