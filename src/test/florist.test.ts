import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { business, categories, floristSchema, gallery, reviews, whatsappUrl } from "@/lib/florist";

describe("Confirmed florist details", () => {
  it("uses the confirmed WhatsApp recipient and contextual message", () => {
    const url = new URL(whatsappUrl("Olá! Gostaria de conhecer as opções de buquês."));
    expect(url.pathname).toBe("/5547996603083");
    expect(url.searchParams.get("text")).toBe("Olá! Gostaria de conhecer as opções de buquês.");
  });
  it("preserves the Google rating and review count", () => {
    expect(floristSchema.aggregateRating.ratingValue).toBe(4.8);
    expect(floristSchema.aggregateRating.reviewCount).toBe(50);
  });
  it("preserves the confirmed Instagram account and follower count", () => {
    expect(business.instagram).toBe("https://www.instagram.com/floricultura_tudomaisdoce/");
    expect(business.followers).toBe(1403);
  });
  it("uses exactly seven unique lower-section photographs and both approved hero files", () => {
    const paths = [...categories, ...gallery].map(item => item.image);
    expect(categories).toHaveLength(3);
    expect(gallery).toHaveLength(4);
    expect(new Set(paths).size).toBe(7);
    for (const path of [...paths, "/images/hero_desktop.jpg", "/images/hero_mobile.jpg"]) {
      expect(existsSync(`public${path}`), path).toBe(true);
      const bytes = readFileSync(`public${path}`);
      if (path.endsWith(".png")) expect([...bytes.subarray(0, 8)]).toEqual([137, 80, 78, 71, 13, 10, 26, 10]);
      else expect([...bytes.subarray(0, 3)]).toEqual([255, 216, 255]);
    }
    expect(paths.some(path => path.includes("793721934") || path.includes("hero"))).toBe(false);
  });
  it("contains exactly the eight authorized customer reviews", () => {
    expect(reviews.map(review => review.name)).toEqual([
      "Jessica Medeiros Moraes dos Santos", "Gisele Schmitt", "Caroline dos Santos",
      "moises soares", "Eloiza Anunciacao", "Kercia Silva", "wendel lopes", "Daniel RJ",
    ]);
  });
  it("keeps confirmed address data and omits unconfirmed opening hours and prices", () => {
    expect(floristSchema.address.streetAddress).toBe("Rua Tabatinga, 1733, Iririú");
    expect(floristSchema.address.postalCode).toBe("89224-051");
    expect(floristSchema).not.toHaveProperty("openingHoursSpecification");
    expect(floristSchema).not.toHaveProperty("priceRange");
  });
});