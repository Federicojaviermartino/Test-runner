import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sum } from "./index.js";
import { rest } from "./index.js";
import { multiply } from "./index.js";
import { div } from "./index.js";
import { mod } from "./index.js";

describe("Contenedor de mis test", () => {
    it("Test de suma", () => {
        const result = sum(2, 8);
        assert.strictEqual(result, 10);
    });

    it("Test de resta", () => {
        const result = rest(8, 2);
        assert.strictEqual(result, 6);
    });

    it("Test de multiplicación", () => {
        const result = multiply(9, 5);
        assert.strictEqual(result, 45);
    });

    it("Test de división", () => {
        const result = div(12, 2);
        assert.strictEqual(result, 6);
    });

    it("Test Operador resto", () => {
        const result = mod(5, 2);
        assert.strictEqual(result, 1);
    });
});