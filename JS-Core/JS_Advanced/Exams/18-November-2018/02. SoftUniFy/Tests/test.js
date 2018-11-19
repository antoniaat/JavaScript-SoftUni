let SoftUniFy = require('../app');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe("Test class functionality", function() {
    describe("Create instance", function() {
        it("Create instance of the class", function() {
            let expected = new SoftUniFy();
            expected = expected.allSongs;

            expect(expected).to.be.eql({});
        });
    });

    describe("Download songs", function() {
        it("Add one song", function() {
            let expected = new SoftUniFy();
            expected = expected.downloadSong("pesho","trepni","trepni trepni trepni");

            expect(expected).to.be.eql({
                "allSongs": {
                    "pesho": {
                        "rate": 0,
                        "songs": ["trepni - trepni trepni trepni"],
                        "votes": 0
                    }
                }
            });
        });

        it("Add two songs", function() {
            let expected = new SoftUniFy();
            expected = expected.downloadSong("pesho","trepni","trepni trepni trepni");
            expected = expected.downloadSong("gosho","krisko","losh ili dobur dvete mi lica obichash");

            expect(expected).to.be.eql({
                "allSongs": {
                    "pesho": {
                        "rate": 0,
                        "songs": ["trepni - trepni trepni trepni"],
                        "votes": 0
                    },
                    "gosho": {
                        "rate": 0,
                        "songs": ["krisko - losh ili dobur dvete mi lica obichash"],
                        "votes": 0
                    }
                }
            });
        });
    });

    describe("Play song", function() {
        it("Play existing song", function() {
            let expected = new SoftUniFy();
            expected = expected.downloadSong("pesho","trepni","trepni trepni trepni");
            expected = expected.playSong("trepni");

            expect(expected).to.be.eql("pesho:\ntrepni - trepni trepni trepni\n");
        });

        it("Play non-existing song", function() {
            let expected = new SoftUniFy();
            expected = expected.downloadSong("pesho","trepni","trepni trepni trepni");
            expected = expected.playSong("ideal petroff");

            expect(expected).to.be.eql("You have not downloaded a ideal petroff song yet. Use SoftUniFy's function downloadSong() to change that!");
        });
    });

    describe("Song list", function() {
        it("Get all songs in the list", function() {
            let expected = new SoftUniFy();
            expected = expected.downloadSong("pesho","trepni","trepni trepni trepni");
            expected = expected.downloadSong("krisko","ideal petroff","seks buren, stres nulev");
            expected = expected.songsList;

            expect(expected).to.be.eql("trepni - trepni trepni trepni\nideal petroff - seks buren, stres nulev");
        });

        it("Get all songs in empty list", function() {
            let expected = new SoftUniFy();
            expected = expected.songsList;

            expect(expected).to.be.eql("Your song list is empty");
        });
    });

    describe("Rate artist", function() {
        it("Rate two artists", function() {
            let expected = new SoftUniFy();
            expected = expected.downloadSong("pesho","trepni","trepni trepni trepni");
            expected = expected.downloadSong("krisko","ideal petroff","seks buren, stres nulev");
            expected = expected.rateArtist("pesho");

            expect(expected).to.be.eql(0);
        });

    });
});
