import { formatDate } from "./dateUtil";

describe("formatDate function", () => {
  it("Formats a Date object with the default format", () => {
    const date = new Date(2023, 0, 1, 12, 0);
    const result = formatDate(date);
    expect(result).toBe("01/01/2023 12:00");
  });

  it("Formats a date string with the default format", () => {
    const date = "2023-01-01T12:00:00";
    const result = formatDate(date);
    expect(result).toBe("01/01/2023 12:00");
  });

  it("Formats a Date object with a custom format", () => {
    const date = new Date(2023, 0, 1, 12, 0);
    const result = formatDate(date, "yyyy-MM-dd");
    expect(result).toBe("2023-01-01");
  });

  it("Formats a date string with a custom format", () => {
    const date = "2023-01-01T12:00:00";
    const result = formatDate(date, "yyyy-MM-dd");
    expect(result).toBe("2023-01-01");
  });

  it("Handles invalid date input gracefully", () => {
    const date = "invalid-date";
    expect(() => formatDate(date)).toThrow();
  });
});
