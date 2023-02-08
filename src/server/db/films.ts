import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const getAll = async () => await client.films.findMany();
const getOne = async (id: string) => await client.films.findFirst({ where: { id } });
const getOneTitle = async (title: string) => await client.films.findFirst({ where: { title } });

async function DOIT() {
  const films = await getOneTitle("Earwig and the Witch");
  console.log(films);
}
DOIT();

export default {
  getAll,
  getOne,
  getOneTitle,
};
