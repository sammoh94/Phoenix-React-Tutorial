defmodule FritterApp.Tweet do
  use FritterApp.Web, :model

  schema "tweets" do
    field :tweet, :string
    belongs_to :user, FritterApp.User

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:tweet])
    |> validate_required([:tweet])
    |> assoc_constraint(:user)
  end

end

defimpl Poison.Encoder, for: FritterApp.Tweet do
  def encode(struct, options) do
    map = struct
          |> Map.from_struct
          |> Map.drop([:__meta__, :__struct__, :user])
    Poison.Encoder.Map.encode(map, options)
  end
end
