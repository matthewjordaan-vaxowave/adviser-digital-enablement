import { ClientService } from "@/services/clientService";

describe("Get clients", () => {
  test("It should return Tata Matomane", () => {
    const output = "Tata Matomane";

    expect(ClientService.getClients()[0].name).toEqual(output);
  });
});
