defmodule FritterApp.UserView do
  use FritterApp.Web, :view

  def render("index.json", data) do
    %{users: data.users}
  end

  def render("show.json", data) do
    %{user: data.user}
  end

  def render("create.json", data) do
    %{id: data.id}
  end
end
