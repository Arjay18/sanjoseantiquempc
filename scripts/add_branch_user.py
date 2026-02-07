import prisma
import bcrypt

# San Jose branch user credentials
username = "sanjose_admin"
password = "sanjoseadmin"
branch = "sanjose"
role = "branch"

hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

async def main():
    await prisma.connect()
    await prisma.models.BranchUser.create(
        data={
            "username": username,
            "password": hashed_password,
            "branch": branch,
            "role": role
        }
    )
    await prisma.disconnect()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
