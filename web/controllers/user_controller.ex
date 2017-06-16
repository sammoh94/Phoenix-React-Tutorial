defmodule FritterApp.UserController do
  use FritterApp.Web, :controller

  alias FritterApp.User

  def index(conn, _params) do
    users = Repo.all(User)
    json(conn, %{users: users})
  end

  def new(conn, _params) do
    changeset = User.changeset(%User{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
    changeset = User.changeset(%User{}, user_params)

    case Repo.insert(changeset) do
      {:ok, user} ->
        json(conn, %{id: user.id})
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Repo.get!(User, id) |> Map.from_struct() |> Map.drop([:__meta__, :tweets])
    json(conn, %{user: user})
  end

  def delete(conn, %{"id" => id}) do
    Repo.get!(User, id)
    |> Repo.delete!()

    conn
    |> put_status(201)
    |> send_resp(:no_content, "")
  end
end
