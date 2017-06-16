defmodule FritterApp.LoginController do
  use FritterApp.Web, :controller

  alias FritterApp.User
  # plug :scrub_params, "name" when action in [:create]
  def new(conn, _params) do
    render conn, "new.html"
  end

  def create(conn, %{"name" => name}) do
    user = Repo.get_by(User, "name": name)
    result = cond do
      user ->
        {:ok, conn}
      true ->
        {:error, :not_found, conn}
    end

    case result do
      {:ok, conn} ->
        updated_user = user
        |> Map.from_struct
        |> Map.drop([:__meta__, :tweets])
        render(conn, "index.json", user: updated_user);
    end
  end
end
