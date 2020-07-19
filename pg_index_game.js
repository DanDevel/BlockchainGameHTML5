
    var Game = Game3.Game.extend({
    init: function(el) {
        // make a cube and a light
        this.cube = new Cube(this);
        this.light = new Game3.Light(0xFFFFFF, new THREE.Vector3(200, 150, -200));
        this.cube2 = new Cube2(this);
        this.ground1 = new Ground1(this);
        // show objects
        this.add(this.cube);
        this.add(this.light);
        this.add(this.cube2);
        this.add(this.ground1);
        this.add(this.sphere);
       
    },

    // gets called every timer fired 
    update: function() {
        this.cube.update();
        this.cube2.update();
        this.ground1.update();
        this.sphere.update();
    }
    });



    var Cube = Game3.Model.extend({
    init: function(game) {
        // set up geometry
        var grey = new THREE.MeshLambertMaterial({color: 0xCCCCCC});
        this.cube = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), grey);

        // set object
        this.interactive = true;
        this.mesh(this.cube);

    },

    update: function() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.02;
    },

    mouseover: function(event) {
        var rand = Math.floor(Math.random() * 0xFFFFFF);
        this.cube.material.color.setHex(rand);
        this.cube.position.x += 10;
        
    },

    mouseout: function(event) {
        this.cube.material.color.setHex(0xCCCCCC);
    },
    
    });
    var Cube2 = Game3.Model.extend({
    init: function(game) {

        var grey = new THREE.MeshLambertMaterial({color: 0xCCCCCC});
        this.cube2 = new THREE.Mesh(new THREE.CubeGeometry(400, 200, 200), grey);

        // set object
        this.interactive = true;
        this.mesh(this.cube2);

    }});

    var Ground1 = Game3.Model.extend({
    init: function(game) {
        // set up geometry
        var grey = new THREE.MeshLambertMaterial({color: 0xCCCCCC});
        this.ground1 = new THREE.Mesh(new THREE.CubeGeometry(2000, 10, 2000), grey);

        // set object
        this.interactive = true;
        this.mesh(this.ground1);

    }});



