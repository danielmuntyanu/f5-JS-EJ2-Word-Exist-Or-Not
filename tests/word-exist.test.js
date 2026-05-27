import { describe, test, expect } from "vitest";
import { wordExist } from "../js/word-exist.js";

describe("Test for funcion wordExist()", () => {
    test("'adsjflsdjfenglishEfajfadi' should return: true", () => {
        expect(wordExist("adsjflsdjfenglishEfajfadi")).toBe(true);
    });
    test("'ovk!9429420eNgLisHfdsofFefa932' should return: true", () => {
        expect(wordExist("ovk!9429420eNgLisHfdsofFefa932")).toBe(true);
    });
    test("'EngishenglisirenjadfvAeglish' should return: false", () => {
        expect(wordExist("EngishenglisirenjadfvAeglish")).toBe(false);
    });
    test("'' should return: false", () => {
        expect(wordExist("")).toBe(false);
    });
});

