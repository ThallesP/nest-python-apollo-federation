import typing
import strawberry


@strawberry.federation.type(keys=["id"])
class User:
    id: strawberry.ID
    name: str


@strawberry.type
class Query:
    users: typing.List[User]


def get_users():
    return [
        User(
            id=strawberry.ID("1"),
            name="F. Scott Fitzgerald",
        ),
    ]


@strawberry.type
class Query:
    user: typing.List[User] = strawberry.field(resolver=get_users)

schema = strawberry.federation.Schema(query=Query, enable_federation_2=True)
